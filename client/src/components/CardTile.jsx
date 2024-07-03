function CardTile() {
    return (
        <div className="h-[45vh] w-[18vw] shadow-md rounded-md cursor-pointer 
        max-sm:w-[62vw] max-sm:h-[40vh]">
            <img src="https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg" 
            alt="" className="rounded-t"
            />
            <div className="px-4 py-2">
                <p>Project tile</p>
            </div>
        </div>
    )
}

export default CardTile;