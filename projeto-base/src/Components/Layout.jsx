export default function Layout(){
    return(
        <section className='container'>
            <h1 className="text-primary"> Informações </h1>

            <div className="mt-4 mb-4 d-md-flex flex-row justify-content-around">

                <div className="card col-md-3">
                    <img className="card-img-top w-60" src="http://lorempixel.com.br/150/100/?1" alt="IMG2" />  

                    <div className="card-body">
                        <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        <a href="#" className="btn btn-danger w-100 "> Veja mais </a>
                    </div>
                    
                </div>

                <div className="card col-md-3">
                    <img className="card-img-top w-60" src="http://lorempixel.com.br/150/100/?2" alt="IMG2" />  

                    <div className="card-body">
                        <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        <a href="#" className="btn btn-danger w-100 "> Veja mais </a>
                    </div>
                    
                </div>

                <div className="card col-md-3">
                    <img className="card-img-top w-60" src="http://lorempixel.com.br/150/100/?3" alt="IMG2" />  

                    <div className="card-body ">
                        <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        <a href="#" className="btn btn-danger w-100"> Veja mais </a>
                    </div>
                    
                </div>
            </div>      
        </section>

    );
}