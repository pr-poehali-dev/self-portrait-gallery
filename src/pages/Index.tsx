import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const posts = [
    {
      id: 1,
      title: 'Искусство самопознания через творчество',
      excerpt: 'Как создание контента помогает лучше понять себя и свои стремления',
      image: '/img/e1cace13-9c9e-43e8-9dfd-d438163ae756.jpg',
      category: 'Личное',
      date: '2 октября 2025',
      readTime: '5 мин',
    },
    {
      id: 2,
      title: 'Современные тренды в дизайне',
      excerpt: 'Разбираем актуальные подходы к созданию визуального контента',
      image: '/placeholder.svg',
      category: 'Дизайн',
      date: '28 сентября 2025',
      readTime: '7 мин',
    },
    {
      id: 3,
      title: 'Минимализм как философия жизни',
      excerpt: 'Почему меньше значит больше в современном мире',
      image: '/placeholder.svg',
      category: 'Образ жизни',
      date: '25 сентября 2025',
      readTime: '6 мин',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fade-in-up">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Добро пожаловать
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Пространство для вдохновения и идей
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Делюсь мыслями о дизайне, творчестве и жизни в современном мире
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button size="lg" className="group">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="group">
                    Связаться
                    <Icon name="Mail" className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Последние статьи</h2>
                <p className="text-muted-foreground">Свежие мысли и идеи</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Подписаться на обновления</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Получайте новые статьи прямо на почту
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button size="lg" className="group">
                  Подписаться
                  <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
