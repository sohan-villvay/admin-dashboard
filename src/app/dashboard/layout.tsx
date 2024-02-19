const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div></div>
      {children}
    </div>
  );
};

export default Layout;
