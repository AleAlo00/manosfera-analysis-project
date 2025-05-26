
import { Shield, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">Manosfera</span>
            </div>
            <p className="text-gray-300 text-sm">
              Analisi e prevenzione del fenomeno della manosfera per una società più sicura e consapevole.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti di Emergenza</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1522 - Antiviolenza e Stalking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>112 - Emergenze</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>helpline@poliziapostale.it</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informazioni</h3>
            <p className="text-gray-300 text-sm">
              Elaborato di Christian Devecchi<br />
              Per scopi educativi e di sensibilizzazione<br />
              © 2024 - Tutti i diritti riservati
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            Se stai vivendo una situazione di violenza o hai pensieri violenti, 
            chiedi aiuto immediatamente contattando i numeri di emergenza.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
