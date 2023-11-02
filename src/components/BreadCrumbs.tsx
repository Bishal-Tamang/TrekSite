import { Link, useLocation } from "react-router-dom";
import '../assets/Styles/breadcrumbs.css'
import React from "react";

interface MyStyleProps {
    style: React.CSSProperties;
}

// interface BreadCrumbsProps extends MyStyleProps {
//     pathNames: {[key: string]: string};
// }

const BreadCrumbs: React.FC<MyStyleProps> = ({style}) => {

    const location = useLocation();

    console.log(location, "located");

    let currentLink = "";

    const crumbs = location.pathname.split('/')
                    .filter(crumb => crumb!== '')
                    .map(crumb => {
                        currentLink += `/${crumb}`
                        // const name = pathNames[currentLink] || crumb;
                        return (
                            <div key={crumb} className="">
                                <Link to={currentLink}>{crumb}</Link>
                                {/* <Link to={currentLink}>{name}</Link> */}

                            </div>
                        )
                    })

  return (
    <div className="breadCrumbs" style={style}>
        {crumbs}
    </div>
  )
}

export default BreadCrumbs