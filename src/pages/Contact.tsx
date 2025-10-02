import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: 'Instagram',
      title: 'Instagram',
      value: '@myblog',
      link: 'https://instagram.com',
    },
    {
      icon: 'Twitter',
      title: 'Twitter',
      value: '@myblog',
      link: 'https://twitter.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Давайте пообщаемся
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Буду рада обратной связи, вопросам или предложениям о сотрудничестве
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Напишите мне</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Имя
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ваше имя"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Сообщение
                          </label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Ваше сообщение..."
                            rows={6}
                            required
                          />
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full group">
                          Отправить
                          <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Контакты</h2>
                    <div className="space-y-4">
                      {contactInfo.map((contact) => (
                        <a
                          key={contact.title}
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <Card className="transition-all hover:shadow-lg hover:border-primary/20">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all">
                                  <Icon name={contact.icon} size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <div className="font-medium text-sm text-muted-foreground">
                                    {contact.title}
                                  </div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    {contact.value}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-4">Следите за обновлениями</h3>
                      <p className="text-muted-foreground mb-6">
                        Подписывайтесь на мои соцсети, чтобы не пропустить новые статьи и идеи
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                        >
                          <Icon name="Instagram" size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-lg bg-background hover:bg-secondary hover:text-secondary-foreground transition-colors flex items-center justify-center group"
                        >
                          <Icon name="Twitter" size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center group"
                        >
                          <Icon name="Linkedin" size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
