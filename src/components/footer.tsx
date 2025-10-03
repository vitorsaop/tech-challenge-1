import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
	return (
		<footer className="bg-[#000] pt-9 pb-9 text-white">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
										
					{/* Serviços */}
					<section aria-labelledby="services">
						<h4 id="services" className="mb-5 text-[20px] font-semibold text-[#47a138]">
							Serviços
						</h4>
						<nav aria-label="Serviços">
							<ul className="space-y-3 text-lg" role="list">
								<li>
									<Link href={"#"} className="hover:text-[#47a138]" rel='noopener noreferrer'>Conta corrente</Link>									
								</li>
								<li>
									<Link href={"#"} className="hover:text-[#47a138]" rel='noopener noreferrer'>Conta PJ</Link>
								</li>
								<li>
									<Link href={"#"} className='hover:text-[#47a138]' rel='noopener noreferrer'>Cartão de crédito</Link>
								</li>
							</ul>
						</nav>
					</section>
					
					{/* Contato */}
					<section aria-labelledby="contact">
						<h4 id="contact" className="mb-5 text-[20px] font-semibold text-[#47a138]">
							Contato
						</h4>
						<p className="mb-3 text-lg">(11) 0800-000-0000</p>
						<p className="mb-3 text-lg">meajuda@bytebank.com.br</p>
						<p className="mb-3 text-lg">ouvidoria@bytebank.com.br</p>
					</section>
					
					{/* Desenvolvido por Alura */}
					<section aria-labelledby="developer-by-alura">
						<h4 id="developer-by-alura" className="mb-5 text-[20px] font-semibold text-center text-[#47a138]">
							Desenvolvido por Alura
						</h4>
						<figure className='flex items-center justify-center mt-6 mb-6'>
							<Image src={"/logo-white.svg"} alt='Logo Branco' width={180} height={35} />
						</figure>						
						<nav className="flex items-center justify-center" aria-label="Desenvolvido por Alura">							
							<ul className="flex items-center space-x-8" role="list">
								<li>
									<Link href={"https://instagram.com"} target="_blank" rel='noopener noreferrer'>
										<Image src={"/instagram.svg"} alt='Instagram icon' aria-hidden width={36} height={36} />
									</Link>									
								</li>
								<li>
									<Link href={"https://whatsapp.com/"} target='_blank' rel='noopener noreferrer'>
										<Image src={"/whatsapp.svg"} alt='WhatsApp icon' aria-hidden width={36} height={36} />
									</Link>									
								</li>
								<li>
									<Link href={"http://youtube.com"} target="_blank" rel='noopener noreferrer'>
										<Image src={"/youtube.svg"} alt='YouTube icon' aria-hidden width={38} height={38} />
									</Link>
								</li>
							</ul>
						</nav>
					</section>
					
				</div>
			</div>			
		</footer>
	)
}