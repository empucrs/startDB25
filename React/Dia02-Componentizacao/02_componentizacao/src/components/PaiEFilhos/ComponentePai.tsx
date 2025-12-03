const ComponentePai = (props: { name: string; children: any; }) => {
    return (
    <>
        <h2>{props.name}</h2>
        {props.children}
    </>
    );
}
 
export default ComponentePai;