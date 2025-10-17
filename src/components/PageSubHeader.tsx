export default function PageSubHeader({
  order,
  title,
}: {
  order: string;
  title: string;
}) {
  return (
    <>
      <h2 className='font-barlow tracking-[0.169rem] text-lg text-white text-center md:text-xl'>
        <span className='opacity-25'>{order} </span> {title}
      </h2>
    </>
  );
}
