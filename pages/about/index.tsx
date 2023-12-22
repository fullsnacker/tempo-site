import Page from '@layouts/Page'
import Banner from '@components/Banner'
import Collapsable from '@components/Collapsable'
import { getFullContent } from '@utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import { FullContent } from '@content/types'
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";

interface Props {
	snippets: FullContent[]
}

export default function About({ snippets }: Props) {
	return (
		<Page description='' title="Rodrigo's Blog | Snippets">
			<Banner
				title='A little about me'
				description={`Description`}
			/>
			<section title='About' className='max-w-4xl'>
				<h3 className='font-extrabold md:text-4xl text-3xl text-gray-700'>About</h3>
				<br />
				<p className='text-gray-600 font-medium md:text-xl text-lg'>
					+3 years of experience as a Frontend developer. I generate impact by getting involved in the design and development cycles, 
					in the creation of efficient, accessible user interfaces and reusable systems.
					<br />
					<br />
					I mainly focusing on UI systems and being the nexus
					of interface design and development to provide
					the best user experience
					between functionality and "look and feel".
					<br />
					<br />
					Proactive mindset and focused on the iteration and delivery of quality and high-impact products.
				</p>
			</section>

			<section title='Most recent work experience' className='max-w-4xl'>
			<h3 className='font-extrabold md:text-4xl text-3xl text-gray-700'>Most recent work experience</h3>
			<br />
				<div className='flex items-center gap-1.5'>
				<a
					target='_blank'
					href={`TEST`}
					className='px-3 py-2 rounded-lg uppercase bg-gray-800 hover:bg-white hover:text-black border-2 border-gray-800 text-white font-semibold transition-all active:scale-95'
				>
					<p>check resume</p>
				</a>
				</div>
				<div className='grid gap-16 pt-12'>
					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>title</h1>
							<span className='font-bold text-gray-600 text-base'>time</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Responsabilities
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>item1</p>
							</li>	
							<li className='list-disc'>
								<p>item2</p>
							</li>		
						</ul>
					</article>

					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>title</h1>
							<span className='font-bold text-gray-600 text-base'>time</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Responsabilities
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>item1</p>
							</li>	
							<li className='list-disc'>
								<p>item2</p>
							</li>		
						</ul>
					</article>
				</div>
			</section>

			<section title='Main Technologies'>
			<h3 className='font-extrabold md:text-4xl text-3xl text-gray-700'>Main Technologies</h3>
			<br />
				<div className='flex gap-12 pt-4 flex-wrap items-center text-gray-500'>
					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								TEST
						</span>
					</div>
				</div>
			</section>
		</Page>
	)
}
