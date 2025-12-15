import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Home" className="text-primary" size={28} />
          <span className="font-bold text-xl">ЛандшафтПро</span>
        </div>
        <a href="tel:+79292293777">
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (929) 229-37-77
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
