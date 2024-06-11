import { uuid } from "uuidv4";
import Link from 'next/link'

async function getData() {
  const response = await fetch('http://localhost:4000/blogposts');
  return response.json();
}

async function Blog() {
  const data = await getData();
  console.log(data)
 

  return (
    <>
      {data.map((item : any, index : number) => (
        <div key={item.id} className='mx-2 p-6 shadow-lg rounded-lg md:mx-48'>

            <Link href ={`/blog/${(index + 1)}`}>

              <p className='font-bold blue_gradient_text text-2xl'>{item.title}</p>
              <p className='text-slate-700 font-poppins text-sm text-justify'>{item.content.slice(0,200)}...</p>
              <hr className='m-2'></hr>
              <div className='flex'>
                <p className='font-semibold mr-6 '> By <span className='text-blue-800'>{item.author}</span></p>
                <p className='mx-3 font-semibold text-slate-700'>{item.date}</p>
              </div>
            </Link>
        </div>
        ))}
    </>
  );
}

export default Blog;
