async function getDataDetails(id) {
    const response = await fetch('http://localhost:4000/blogposts/' + id);
    if (!response.ok) {
        throw new Error('Failed to fetch blog details');
    }
    return response.json();
}

export default async function Blogdetails({ params }) {
    let blogdetail = null;
    try {
        blogdetail = await getDataDetails(params.id);
        console.log(blogdetail);
    } catch (error) {
        console.error('Error fetching blog details:', error);
    }

    if (!blogdetail) {
        return <div className="text-5xl">Loading...</div>; // Or any other loading indicator
    }

    return (
        <div className=" md:mx-48">
            <p className="font-bold blue_gradient_text text-3xl my-4">
                {blogdetail.title}
            </p>
            <div className="flex font-semibold text-xl">
                <p className="mx-3">
                    <i>Written by </i>
                    {blogdetail.author}
                </p>
                <p>{blogdetail.date}</p>
            </div>
            <hr className="my-4"></hr>
            <p className="text-md font-regular text-xl ">{blogdetail.content}</p>
        </div>
    );
}

