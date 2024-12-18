export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div>{children}</div>
    </div>
  );
}
