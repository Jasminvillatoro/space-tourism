export default function PageSubHeader({
  order,
  title,
}: {
  order: string;
  title: string;
}) {
  return (
    <>
      <h2 className='font-barlow tracking-[0.169rem] text-sm text-white'>
        <span className='opacity-25'>{order} </span> {title}
      </h2>
    </>
  );
}
