const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default PageWrapper;
