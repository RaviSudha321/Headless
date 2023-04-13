import { parseISO, format } from "date-fns";


function Date({postDate}){
    let date = parseISO(postDate);

    return(
        <>
            {
                format(date, 'MMM dd, yyyy')
            }
        </>
    )

}

export default Date;