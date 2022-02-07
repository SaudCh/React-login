function NotFound() {
  const boxStyle = {
    height: "80vh",
    width: "100vw",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={boxStyle}>
      <h2 className="text-secondary">Not Found</h2>
    </div>
  );
}

export default NotFound;
