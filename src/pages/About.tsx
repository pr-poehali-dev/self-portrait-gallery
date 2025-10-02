import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const skills = [
    { name: 'Дизайн', icon: 'Palette' },
    { name: 'Творчество', icon: 'Sparkles' },
    { name: 'Фотография', icon: 'Camera' },
    { name: 'Писательство', icon: 'Pen' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Привет! Рада знакомству
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Я создаю этот блог, чтобы делиться своими мыслями, 
                      идеями и вдохновением с миром. Здесь я пишу о том, 
                      что меня волнует, интересует и вдохновляет.
                    </p>
                    <p>
                      Моя страсть — это творчество во всех его проявлениях. 
                      От визуального дизайна до написания текстов, я исследую 
                      различные способы самовыражения и делюсь своими открытиями.
                    </p>
                    <p>
                      В этом пространстве я экспериментирую с идеями, 
                      размышляю о жизни и стремлюсь создавать контент, 
                      который резонирует с людьми.
                    </p>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 animate-scale-in">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-2xl"></div>
                    <img
                      src="https://cdn.poehali.dev/files/7fa36bb5-aacf-455f-b256-37547b3c853c.jpg"
                      alt="Profile"
                      className="relative rounded-3xl w-full shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Чем я занимаюсь</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in group hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all">
                          <Icon name={skill.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
                <CardContent className="p-8 md:p-12">
                  <div className="max-w-3xl mx-auto text-center">
                    <Icon name="Quote" size={48} className="mx-auto mb-6 text-primary opacity-50" />
                    <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
                      "Творчество — это способ познать себя и мир вокруг"
                    </blockquote>
                    <p className="text-muted-foreground">— Моя жизненная философия</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
