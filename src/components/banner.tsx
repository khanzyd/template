import logo from "/public/image.png"

export default function Banner(){
    return (
        <>
            <div className="banner">
                <img className="logo" src={logo.src}></img>
            </div>
        </>
    ) 
}
