import Hero from '@/components/Hero'
import PostersShowcase from '@/components/PostersShowcase'
import VideoShowcase from '@/components/VideoShowcase'
import Footer from '@/components/Footer'
import ExperiencePage from './experience/page'
import ContactPage from './contact/page'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PostersShowcase />
      <VideoShowcase />
      <ExperiencePage/>
      <Footer />
    </main>
  )
}
