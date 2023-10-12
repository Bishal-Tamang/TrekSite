import {useNavigate, useLocation } from "react-router-dom";

import DefaultPackage from "../components/DefaultPackage"
import FAQ from "../Common/FAQ"
import FilterComponent from "../components/FIlterComponent";
import BreadCrumbs from "../components/BreadCrumbs";


const style = {
    color: "#596579",
    fontStyle: 'IBM Plex Sans',
    fontWright: 400,
    fontSize: 14
}

const Pages = [
    { name: 'Home', href: '/', current: false },
    { name: 'Destination', href: '/destination', current: true },
  ]


const FilterPage = () => {

    const {state} = useLocation();

  return (
    <div className="">
        <div className="xl:mx-24 mx-4 md:mx-8 lg:mx-16 mt-6 mb-10">
            {/* <p className="text-gray-600 font-['IBM_Plex_Sans'] text-sm mb-4">Home / Destination</p> */}
            <div className="breadcrumbs">
        <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        {Pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <a
                href={page.href}
                className="ml-4 text-sm xl:text-base hover:text-gray-700 font-['IBM_Plex_Sans'] font-[400] text-gray-600"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
              <p className="ml-3"> /</p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
        </div>

            <h1 className="font-['Manrope'] font-[500] text-xl md:text-3xl text-gray-700"><span className="md:font-[800] text-3xl md:text-5xl">Kathmandu</span> / Family Tour</h1>
        </div>

        <div className="xl:mx-24 mx-4 md:mx-8 lg:mx-16">
            <FilterComponent />
        </div>

        <div>
            <DefaultPackage />
        </div>

        <div className="mb-4 xl:mx-24 mx-4 md:mx-8 lg:mx-16">
            <FAQ title="Kathmandu"/>    
        </div>

    </div>
  )
}

export default FilterPage