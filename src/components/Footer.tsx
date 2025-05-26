
import { Shield, Mail, Phone, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  const sources = [
    {
      title: "Southern Poverty Law Center - Male Supremacy",
      url: "https://www.splcenter.org/fighting-hate/extremist-files/ideology/male-supremacy",
      description: "SPLC analysis on male supremacist movements"
    },
    {
      title: "Anti-Defamation League - Incels Report",
      url: "https://www.adl.org/resources/backgrounders/incels-involuntary-celibates",
      description: "ADL comprehensive report on incel ideology"
    },
    {
      title: "European Parliament - Online Radicalization",
      url: "https://www.europarl.europa.eu/RegData/etudes/STUD/2021/653635/EXPO_STU(2021)653635_EN.pdf",
      description: "EU study on online radicalization and extremism"
    },
    {
      title: "Journal of Interpersonal Violence",
      url: "https://journals.sagepub.com/home/jiv",
      description: "Academic research on gender-based violence"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">Manosphere</span>
            </div>
            <p className="text-gray-300 text-sm">
              Analysis and prevention of the manosphere phenomenon for a safer and more aware society.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1522 - Anti-violence and Stalking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>112 - Emergency Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>helpline@poliziapostale.it</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sources</h3>
            <div className="space-y-2 text-sm">
              {sources.map((source, index) => (
                <div key={index} className="text-gray-300 hover:text-white">
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-2 group"
                  >
                    <ExternalLink className="h-3 w-3 mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                    <div>
                      <div className="font-medium text-blue-300 group-hover:text-blue-200">
                        {source.title}
                      </div>
                      <div className="text-xs opacity-75">
                        {source.description}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <p className="text-gray-300 text-sm">
              Research by Christian Devecchi<br />
              For educational and awareness purposes<br />
              © 2024 - All rights reserved
            </p>
            <div className="mt-4 flex items-center space-x-2 text-xs text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>Based on verified academic sources</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            If you are experiencing violence or having violent thoughts, 
            seek help immediately by contacting emergency numbers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
