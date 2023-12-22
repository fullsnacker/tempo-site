import Page from '@layouts/Page'
import { getPartialContent } from '@utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'
import Recomendator from '@components/Recomendator'
import { Content } from '@content/types'
import { getFullContent } from '@utils/content'
import { FullContent } from '@content/types'
import NoteContent from '@components/NoteContent'
import Collapsable from '@components/Collapsable'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from 'next/link'


interface Props {
	articles: Content[],
	notes: FullContent[],
	snippets: FullContent[]
}

export default function Home({ articles, notes, snippets }: Props) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='Welcome!'
				description='LOREM IPSUM'
			/>

			<div className='grid gap-8'>
				<TopArticles articles={articles} />
				<Recomendator />
				{/* <div className='pt-10 grid gap-4 w-10/12 mx-auto'>
				{notes.map((note, index: number) => (
					<NoteContent key={`${note.topic}_${index}`} {...note} />
				))}
				</div>
				<div className='grid gap-0.5 text-gray-600 hover:text-gray-400 font-medium first-letter:capitalize'>
					{snippets.map((snippet, index: number) => (
						<Collapsable key={snippet.title} label={snippet.title} tag={snippet.topic} open={false}>
							<MDXRemote components={{ CH }} {...snippet.content} />
						</Collapsable>
					))}
				</div> */}
			</div>
			
			{/* GithubRepos */}
			{/* <h2 className='font-extrabold md:text-4xl text-3xl text-gray-800'>Repos</h2> */}
			<div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>
				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'Whatsapp Clone'}</h2>
						<div className='flex items-center text-gray-800'>
						<a
								href={'demoLink'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1em"}}>
								<div>
									<FaLink />
								</div>
								</IconContext.Provider>
							</a>
							<a
								href={'demoLink2'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'Demo of WhatsApp web to create a chat with any email and chat with messages in realtime.'}</p>
					<div className='flex gap-1.5 pb-2'>
					<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}
					>TEST</span
>
					</div>
				</div>




				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'Whatsapp Clone'}</h2>
						<div className='flex items-center text-gray-800'>
						<a
								href={'demoLink'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1em"}}>
								<div>
									<FaLink />
								</div>
								</IconContext.Provider>
							</a>
							<a
								href={'demoLink2'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'Demo of WhatsApp web to create a chat with any email and chat with messages in realtime.'}</p>
					<div className='flex gap-1.5 pb-2'>
					<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}
					>TEST</span
>
					</div>
				</div>



				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'Whatsapp Clone'}</h2>
						<div className='flex items-center text-gray-800'>
						<a
								href={'demoLink'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1em"}}>
								<div>
									<FaLink />
								</div>
								</IconContext.Provider>
							</a>
							<a
								href={'demoLink2'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'Demo of WhatsApp web to create a chat with any email and chat with messages in realtime.'}</p>
					<div className='flex gap-1.5 pb-2'>
					<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}
					>TEST</span>
					</div>
				</div>				
				</div>

				
				<Link
				href='/articles'
				className='font-medium flex gap-1 justify-center hover:gap-2.5 items-center transition-all w-44 rounded-xl hover:bg-gray-100 py-2 active:scale-95'
			>
				<p className=''>View all repos</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>

				{/* <div>

				<section
					className={`mx-auto md:max-w-5xl grid gap-8 before:block before:h-14 -mt-14`}>
					{<h2 className='font-extrabold md:text-4xl text-3xl text-gray-800'>Main Technologies</h2>}
					<slot>AAA</slot>
					<slot>AbbAA</slot>
					<IconContext.Provider value={{ size: "2em", style: {textAlign: 'center'}}}>
												<div>
													<FaGithub />
												</div>
												</IconContext.Provider>
												<div className='flex gap-1.5 pb-2'>
									<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}
									>TEST</span
				>
									</div>
				</section>

			</div> */}
		</Page>
	)
}

export const getStaticProps = async () => {
	const articles = getPartialContent({ type: 'articles' })
	const notes = await getFullContent({ type: 'notes' })
	const snippets = await getFullContent({ type: 'snippets' })

	return {
		props: {
			articles,
			notes,
			snippets
		},
	}
}
