import '../assets/products.css'

function Products({ addToCart }){
    return (
        
        <div className="p-3 catalog">

            <div className="wall one">

                <div className="p-2 rounded-md card">
                    <img src="https://dv2vs9hut5ih2.cloudfront.net/Custom/Content/Products/15/96/1596_dorflex-36cpr-p1117584_m1_637630889384169868.webp" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>DorFlex</h2>
                        <h3>R$5,99</h3>
                        <p>
                            Dorflex é um remédio indicado para o alívio da dor associada às contraturas musculares,
                            incluindo dor de cabeça do tipo tensional. 
                        </p>
                    </div>
                    
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://dmvfarma.vtexassets.com/arquivos/ids/250365/Resfenol-100ml_BAIXA.png?v=638566414002370000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Resfenol</h2>
                        <h3>R$30,69</h3>
                        <p>
                            Resfenol é indicado no tratamento dos sintomas de gripes, resfriados, nasal, coriza e dores musculares presentes nos estados gripais.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://farma22.vtexassets.com/arquivos/ids/184800/compre-dipirona-1g.png?v=638144900800430000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Dipirona</h2>
                        <h3>R$5,98</h3>
                        <p>
                            A Dipirona serve para aliviar dores leves a moderadas, 
                            como dores de cabeça, musculares e cólicas menstruais.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/98/82/98821_esomeprazol-magnesio-40-mg-c-28cpr-rev-p77136_m1_638291769055311783.webp" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Esomeprazol</h2>
                        <h3>R$59,99</h3>
                        <p>
                            Esomeprazol é um inibidor da bomba de prótons (IBP),
                            um medicamento utilizado para reduzir a produção de ácido no estômago.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://io.convertiez.com.br/m/morifarma/shop/products/images/277284/large/desodorante-aerossol-dove-original-150ml_7447.jpg" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Desodorante Dove</h2>
                        <h3>R$19,99</h3>
                        <p>
                            Ideal para o cuidado das axilas, o 
                            desodorante Dove Previne Escurecimento oferece até 48 horas de proteção 
                            contra suor e mau odor.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://drogariasp.vtexassets.com/arquivos/ids/1179950/29041---sabonete-liquido-johnson%E2%80%99s-baby-banho-glicerinado-da-cabeca-aos-pes-200ml-1.jpg?v=638671897387800000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Sabonete Johnson</h2>
                        <h3>R$31,49</h3>
                        <p>
                            O Sabonete Líquido JOHNSON'S possui uma fórmula micelar, 
                            que traz o equilíbrio ideal entre a suavidade que a pele do bebê precisa e a limpeza que você espera.
                        </p>
                    </div>
                </div>
            </div>
            <div className="wall two">
                <div className="p-2 rounded-md card">
                    <img src="https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/89/66/89667_tadalafila-20mg-c-4cpr-p136704_m1_638282289240798409.webp" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Tadalafila</h2>
                        <h3>R$23,71</h3>
                        <p>
                            A Tadalafila é um fármaco utilizado primariamente para tratar disfunções eréteis. 
                            Sua ação se dá pela dilatação dos vasos periféricos, especificamente, as artérias do genital masculino.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYxFyEeH0aZfNa2YHkh4xukwnkv28Wl8Rc6O0CCBorGIptp5OaiQUSs5Ell6Zx8rfwoo&usqp=CAU" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Clonazepam</h2>
                        <h3>R$20,81</h3>
                        <p>
                            Clonazepam é um medicamento que trata convulsões. Também pode tratar transtorno do pânico.
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://drogariavenancio.vtexassets.com/arquivos/ids/1028985/54023_z.jpg?v=638128520045900000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Lubrificante K-Med</h2>
                        <h3>R$14,59</h3>
                        <p>
                            K-Med é um lubrificante íntimo em gel, que serve para tornar a 
                            penetração mais fácil e prazerosa durante a relação sexual. 
                        </p>
                    </div>
                    
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://drogariaspacheco.vteximg.com.br/arquivos/ids/1406907-1000-1000/4391---preservativo-jontex-sensitive-com-3-unidades-1.jpg.jpg?v=638815472590730000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Preservativo Jontex</h2>
                        <h3>R$12,19</h3>
                        <p>
                            O Preservativo Jontex Sensitive é uma camisinha lubrificada mais fina
                            do que as comuns que proporciona maior sensação de contato devido a sua menor espessura. 
                        </p>
                    </div>
                    
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://drogariavenancio.vtexassets.com/arquivos/ids/1100835/70901_z.jpg?v=638398252278570000" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Hidratante CeraVe</h2>
                        <h3>R$94,99</h3>
                        <p>
                            Formulado com ceramidas essenciais e ácido hialurônico, 
                            para uma hidratação de longa duração e uma fórmula leve 
                            e não comedogênica que não obstrui os poros. 
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-md card">
                    <img src="https://images.tcdn.com.br/img/img_prod/763758/shampoo_dove_nutricao_fusao_de_oleos_400_ml_16538_1_9b7895ccdbc3bbbff86bd4db97d9e05f.jpg" alt="Imagem do produto" />
                    <div className="description">
                        <button className='h-8 w-8' onClick={addToCart}><img className='h-4/6 w-4/6' src="/carrinho.svg" alt="" /></button>
                        <h2>Shampoo Dove</h2>
                        <h3>R$27,58</h3>
                        <p>
                            Os shampoos Dove são conhecidos por suas fórmulas hidratantes e nutritivas,
                             que vão além da simples limpeza.
                        </p>
                    </div>
                    
                </div>
            </div>
            

        </div>
    )
}

export default Products;