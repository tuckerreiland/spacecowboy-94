export default function OSFrame ({children}: {children: React.ReactNode}) {
	
	return(
		<div className="fixed top-0 z-50 h-screen w-screen bg-white/0 border-gray-300 box-border border-x-[2px] border-b-[2px]">
			{children}
		</div>
	)
}