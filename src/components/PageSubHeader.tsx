export default function PageSubHeader({
  order,
  title,
}: {
  order: string;
  title: string;
}) {
  return (
    <>
      <h2 className='font-barlow tracking-[0.169rem] text-lg text-white text-center md:text-xl md:text-left md:self-start md:-ml-[136px] lg:text-3xl lg:tracking-[0.295rem] lg:ml-0 lg:font-thin'>
        <span className='opacity-25'>{order} </span> {title}
      </h2>
    </>
  );
}
