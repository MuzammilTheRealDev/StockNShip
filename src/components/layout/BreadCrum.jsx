import { Link } from 'react-router-dom';

const BreadCrum = (props) => {
    let title = props.title;
    let child = props.child;
    return (
        <section className='bg-neutral flex justify-center py-16 relative'>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 bg-repeat bg-center z-0"></div>
            <div className="z-10">
                <div className="h-18"></div>
                <div className="">
                    <h1 className='text-center text-3xl font-bold mb-3 text-secondary'>{title}</h1>
                    <div className=" text-lg text-center"> <Link to={'/'} className='text-primary font-bold text-center'><span>Home </span> </Link> 
                    {child ? <Link to={'/services'}> {'>'} <span className='text-primary font-bold text-center'>{child}</span></Link> : ''}
                     {' > '} <span className='font-semibold text-secondary/80'>{title}</span></div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrum