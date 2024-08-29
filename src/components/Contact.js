

const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1>
            <form>
                <input type="text" className="border to-black p-2 m-2"placeholder="name"/>
                <input type="text" className="border to-black p-2 m-2"placeholder="message"/>
                <button className="border to-black p-2 m-2 rounded-lg">Submit</button>
                

            </form>
        </div>
    );
};

export default Contact;