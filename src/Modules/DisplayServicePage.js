import React from 'react';

const DisplayServicePage = (props) => {
  const dispatchers = {
    firstName: ["John", "Mary", "Edwin", "Annette", "Ali", "Elijah", "Henry", "Noah", "Emma", "Olivia", "Harper", "Evelyn"],
    lastName: ["Davindson", "Wright", "Turner", "Jackson", "Cox", "Anderson", "Lee", "Martinez", "Sanchez", "Adams",
    "Hall", "Kelly", "McDavid", "Thomsen", "Gutierrez", "Beck", "Nordman", "Jimenez"],
    midname: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k","l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w"]  
  }

  const newName = () => {
    const fLen = dispatchers.firstName.length
    const sLen = dispatchers.lastName.length
    const mLen = dispatchers.midname.length

    const firstName = dispatchers.firstName[Math.floor(Math.random() * fLen)]
    const lastName = dispatchers.lastName[Math.floor(Math.random() * sLen)]
    const midName = dispatchers.midname[Math.floor(Math.random() * mLen)]

    return { firstName: firstName, midName: midName, lastName: lastName }
  }

  const txtObject = {  //24 rows to be shown, fill blanks with "-"
    texts: 
      ["1", "2", "3", "4", 
      "1.1: 22:00:00 - San Jose Diridon; Platform 5", 
      "1.2: 22:45:00 - San Francisco; Platform 2",
      "--SERVICE: 157#, SERVICE TYPE: PASSANGER, LOCO: F40PH", 
      "- -> TRANSIT TIME TO NEXT SERVICE XX MINUTES <- - ", 
      "2: 22:34:00 157#: San Jose Diridon -- San Francisco", " -", " -", " -", " -", " -", " -", " -", " -", " -", " -", " -", " -", " -", "-", "-"]
  }

  const headerText = "British railways work order"

  const dispatcher = newName()
  const issued = newName()

  return (
    <>
      <div className="flex-1 m-5 size-a4 shadow-xl">
        <div className="relative p-2 border-2 bg-gray-50 border-black size-a4">
          <Header headerText={headerText} issued={issued}/>
          <Top operator={"OPERATOR"}/>
          <div className="mt-10 mx-4">
            <Row rowTexts={txtObject}/>
          </div>
          <Bottom dispatchName={dispatcher} driverName={"JAS"} />
          <div className="absolute bottom-2 w-[520px]">
            <Footer />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default DisplayServicePage;
