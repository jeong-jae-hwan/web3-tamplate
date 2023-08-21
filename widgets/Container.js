import React, { forwardRef } from "react";

//
/// Container
export const Container = forwardRef(function Container({
  children,
  direction = "vertical",
  gap,
  ref,
  ...props
}) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// Wrap
export const Wrap = forwardRef(function Wrap({
  children,
  direction = "vertical",
  gap,
  ref,
  ...props
}) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// Box
export const Box = forwardRef(function Box({
  children,
  direction = "vertical",
  gap,
  ref,
  ...props
}) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// BoxShadow
export const BoxShadow = forwardRef(function BoxShadow({
  children,
  direction = "vertical",
  gap,
  ref,
  ...props
}) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        boxShadow: "0px 2px 16px rgba(0,0,0,0.1)",
        background: "#fff",
        borderRadius: "16px",
      }}
      {...props}
    >
      {children}
    </div>
  );
});
