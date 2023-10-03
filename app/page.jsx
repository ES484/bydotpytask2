import PageSidebar from '@/components/PageSidebar';
import StarIcon from '@/appIcons/stars.svg';
import ProgressBar from '@/components/ProgressBar';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import MainLayout from '@/components/Layouts/MainLayout';
import LoginForm from '@/components/LoginForm';
import HandDrawnArrow from '@/components/HandDrawnArrow';


export default function Home() {
  const status = ['inProgress', 'unpassed', 'unpassed'];
  return (
    <main className='flex min-h-screen relative'>
      <MainLayout>
        <ProgressBar status={status} />
        <LoginForm />
      </MainLayout>
      <HandDrawnArrow />
      <PageSidebar icon={StarIcon} header={capitalizeFirstLetter(`Start turning your ideas into reality.`)} />
    </main>
  )
}
