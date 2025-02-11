import { PaperPlaneTilt, InstagramLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="flex w-[560px] justify-between rounded-full bg-gray-100 p-5">
          <div className="text-xl font-bold">
            <PaperPlaneTilt size={32} className="inline mr-3"/>
            biobun@gmail.com
          </div>
          <div className="flex gap-3">
            <InstagramLogo size={32} className=""/>
            <TwitterLogo size={32} className=""/>
            <LinkedinLogo size={32} className=""/>
          </div>
        </div>
      </div>
    </>
  ); 
}