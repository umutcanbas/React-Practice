type Props = {
  params: Promise<{ slug: string[] }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const userId = slug[0];
  const category = slug[1];
  const categoryId = slug[2];

  return (
    <ul>
      <li>userId:{userId}</li>
      <li>category:{category}</li>
      <li>categoryId:{categoryId}</li>
    </ul>
  );
};

export default page;
