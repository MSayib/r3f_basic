type propsType = {
    to:string;
    from:string;
}

export function Hello1(props:propsType){
    const {to, from} = props;
    console.log('Hello from Hello1');

    return(
        <>
            <h1>Hello {to} from : {from} </h1>
        </>
    )
}