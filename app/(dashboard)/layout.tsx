import Navbar from '@/components/navbar/Navbar';
import SideBar from '@/components/sidebar/SideBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full relative'>
			<div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-700'>
				<SideBar />
			</div>
			<main className='md:pl-72'>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
