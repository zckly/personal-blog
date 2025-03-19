import React, { useState, useRef, useEffect } from "react";

interface DraggableWindowProps {
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  initialPosition?: { x: number; y: number };
  responsivePosition?: {
    desktop: { x: number; y: number };
    tablet?: { x: number; y: number };
    mobile?: { x: number; y: number };
  };
  responsiveSize?: {
    desktop?: { width: number; height: number };
    tablet?: { width: number; height: number };
    mobile?: { width: number; height: number };
  };
  onBringToFront?: () => void;
  style?: React.CSSProperties;
}

export function DraggableWindow({
  children,
  initialWidth = 400,
  initialHeight = 300,
  initialPosition = { x: 50, y: 50 },
  responsivePosition,
  responsiveSize,
  onBringToFront,
  style,
}: DraggableWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  
  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle responsive positioning and sizing based on screen size
  useEffect(() => {
    if (!responsivePosition && !responsiveSize) return;

    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Mobile view - apply mobile specific values
        if (responsivePosition?.mobile) {
          setPosition(responsivePosition.mobile);
        }
        
        if (responsiveSize?.mobile) {
          setSize(responsiveSize.mobile);
        }
      } else if (width < 1024) {
        // Tablet view
        if (responsivePosition?.tablet) {
          setPosition(responsivePosition.tablet);
        }
        if (responsiveSize?.tablet) {
          setSize(responsiveSize.tablet);
        }
      } else {
        // Desktop view
        if (responsivePosition?.desktop) {
          setPosition(responsivePosition.desktop);
        }
        if (responsiveSize?.desktop) {
          setSize(responsiveSize.desktop);
        }
      }
    };

    // Debounce resize function for better performance
    const debounceResize = () => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleResize, 150);
      };
    };

    const debouncedHandleResize = debounceResize();

    // Set initial position and size based on screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', debouncedHandleResize);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [responsivePosition, responsiveSize]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent dragging on mobile devices
    if (isMobile && responsivePosition?.mobile) {
      if (onBringToFront) {
        onBringToFront();
      }
      return;
    }
    
    if (
      e.target === windowRef.current ||
      (e.target instanceof HTMLElement &&
        e.target.className.includes("title-bar"))
    ) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      if (onBringToFront) {
        onBringToFront();
      }
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    // Prevent resizing on mobile devices
    if (isMobile && responsiveSize?.mobile) {
      e.stopPropagation();
      if (onBringToFront) {
        onBringToFront();
      }
      return;
    }
    
    e.stopPropagation();
    setIsResizing(true);
    if (onBringToFront) {
      onBringToFront();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y,
        });
      } else if (isResizing && windowRef.current) {
        const rect = windowRef.current.getBoundingClientRect();
        setSize({
          width: Math.max(200, e.clientX - rect.left),
          height: Math.max(150, e.clientY - rect.top),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, startPos]);

  return (
    <div
      ref={windowRef}
      className="absolute"
      style={{
        ...style,
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isMobile ? "default" : (isDragging ? "grabbing" : "grab"),
        margin: 0,
        padding: 0,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
      {!isMobile && (
        <div
          className="resize-handle absolute bottom-0 right-0 flex h-6 w-6 cursor-se-resize items-center justify-center"
          onMouseDown={handleResizeStart}
        >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-current text-gray-500"
        >
          <rect x="0" y="8" width="2" height="2" />
          <rect x="4" y="8" width="2" height="2" />
          <rect x="8" y="8" width="2" height="2" />
          <rect x="4" y="4" width="2" height="2" />
          <rect x="8" y="4" width="2" height="2" />
          <rect x="8" y="0" width="2" height="2" />
        </svg>
      </div>
      )}
    </div>
  );
}
