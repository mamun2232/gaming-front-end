import { Tab } from '@headlessui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ReferEmailReg from './ReferEmailReg';
import ReferPhoneReg from './ReferPhoneReg';

const ReferSingUp = () => {
      const {referId} = useParams()
      const Tabs = [
            {
              name: "Phone Register",
              content: (
                <div data-aos="fade-right" data-aos-duration="1000">
                  <ReferPhoneReg referId={referId}/>
                </div>
              ),
            },
        
            {
              name: "Email Register",
              content: (
                <div data-aos="fade-right" data-aos-duration="1000">
                     <ReferEmailReg referId={referId} />
                </div>
              ),
            },
          ];
      return (
            <div className=" bg-base-200 h-screen">
            <div className=" h-12  w-full bg-white flex justify-center items-center">
              <p className="text-lg font-medium">Register</p>
            </div>
      
            <div className="container mx-auto px-5">
              <Tab.Group>
                <Tab.List className=" rounded-sm  flex   justify-between h-14  bg-white mt-5">
                  {Tabs.map((item, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        selected
                          ? `transition  duration-500 border-b-[3px]  px-6 ${" border-yellow-500 w-1/2  text-black"}     pb-1 text-center `
                          : ` py-[5px] px-6 w-1/2  `
                      }
                    >
                      {index < Tabs.length - 1 && (
                        <span className="  h-6  -translate-y-1/2 bg-gray-100" />
                      )}
                      <span className=" font-semibold text-[17px] w-1/2">
                        {item.name}
                      </span>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="pt-5">
                  {Tabs.map((item, index) => (
                    <Tab.Panel>{item.content}</Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
      );
};

export default ReferSingUp;