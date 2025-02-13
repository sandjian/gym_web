import { Feature } from "../../ui/features-tab";
import { FeaturesCardsHover } from "../../ui/features-cards";


function FeaturesSection() {
  return( 
    <section className="w-full h-full flex flex-col px-3">
      <FeaturesCardsHover/>
      <Feature />
    </section>
  )
}

export { FeaturesSection };
