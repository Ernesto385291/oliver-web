export const ActionBar = ({
  title,
  content,
}: {
  title?: string;
  content?: React.ReactNode;
}) => {
  return (
    <section className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center justify-end">{content}</div>
    </section>
  );
};
