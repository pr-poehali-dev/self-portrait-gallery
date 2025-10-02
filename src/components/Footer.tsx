import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Мой блог
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Делюсь мыслями, идеями и вдохновением в современном формате
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Соц. сети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
              >
                <Icon name="Instagram" size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors flex items-center justify-center group"
              >
                <Icon name="Twitter" size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center group"
              >
                <Icon name="Linkedin" size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Мой блог. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
