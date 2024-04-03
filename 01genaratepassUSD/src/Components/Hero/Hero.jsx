import React from 'react';
import InnerHero from './InnerHero';

const Hero = () => {
    const data = [
        {
            dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt eveniet eos illum commodi velit vero. Sunt doloribus et laborum omnis ex libero sit eaque ea illum tempora eum, nam enim animi quas? Ex ipsam id, voluptates earum reprehenderit quidem laborum nulla ullam rem quasi doloribus consectetur cumque cum voluptate pariatur porro debitis ab molestias, eos labore perspiciatis. Odio minus sunt ex, nisi repellat fugiat, vitae consectetur totam dignissimos aut magni repudiandae dolore? Maiores, architecto sit cumque minus quo ipsum voluptatem nemo vel tenetur quos nulla aperiam facere repellendus harum? Consequatur debitis praesentium voluptatem pariatur, assumenda nisi vitae iusto natus!"
        }
    ]

    return (
        <div>
            <div className='bg-gray-200 p-4 w-[400px] text-center mx-auto py-9'>
                {data.map((data, i) => <InnerHero data={data} key={i}></InnerHero>)}
            </div>
        </div>
    );
};

export default Hero;