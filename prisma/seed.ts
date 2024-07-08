const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: 'Mouses',
        slug: 'mouses',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258139/fsw-store/image_11_pgxhl9.png',
      },
    })

    const mouses = [
      {
        name: 'Mouse Gamer Logitech G403 HERO com RGB LIGHTSYNC',
        slug: 'mouse-gamer-logitech-g403',
        description:
          'Sensor HERO 25K – O sensor para jogos da próxima geração com rastreamento 1:1, IPS de 400+ e resolução máxima de DPI de 100 a 25.600, além de suavização, filtragem e aceleração nulas.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720256799/fsw-store/image_2_o2ucju.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720256800/fsw-store/image_5_dg8vqc.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720256800/fsw-store/image_3_fsxqwf.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720256799/fsw-store/image_1_wdryii.png',
        ],
        basePrice: 250,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Mouse sem fio Logitech M720 Triathlon',
        slug: 'logitech-m720-triathlon',
        description:
          ' Tecnologia Easy Switch\nAumente sua produtividade com a tecnologia Logitech Flow\nDesign duradouro\nPilha inclusa com até 24 meses de vida útil\nProdutividade personalizada com o software Logitech Options.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720257434/fsw-store/image_6_gioe2l.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720257435/fsw-store/image_9_kvymsf.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720257435/fsw-store/image_8_viqci4.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720257435/fsw-store/image_7_rovkj6.png',
        ],
        basePrice: 299,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'MOUSE GAMER LOGITECH WIRELESS PRO X SUPERLIGHT ',
        slug: 'logitech-pro-lightspeed',
        description:
          'Características:	Sensor HERO™ 25K\nCompatível com POWERPLAY\nTecnologia sem fio LIGHTSPEED\nMemória integrada*\nSistema tensor de clique\nPés de PTFE sem aditivos\n5 botões',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258139/fsw-store/image_11_pgxhl9.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258139/fsw-store/image_12_x3vxay.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258140/fsw-store/image_13_o3aa2b.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258140/fsw-store/image_14_jmtoqg.png',
        ],
        basePrice: 999,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'MOUSE GAMER COUGAR DUALBLADER',
        slug: 'mouse-gamer-cougar-dualblader',
        description:
          'O novo e icônico mouse gamer DUALBLADER apresenta um suporte para a palma da mão totalmente personalizável, ergonômico e ajustável. Vale a pena mencionar que o DUALBLADER está equipado com o novo conceito evolutivo. Ele fornece dois desdobramentos (garra/aperto de palma) através de ajuste de altura para os jogadores escolherem. Isso faz que os jogadores mudem de estilos durante o jogo.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258684/fsw-store/image_15_oemnbt.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258684/fsw-store/image_16_b2lthd.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258685/fsw-store/image_18_k0hksy.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720258685/fsw-store/image_17_fe9i8l.png',
        ],
        basePrice: 588,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'MOUSE VERTICAL ERGONOMICO LOGITECH LIFT',
        slug: 'mouse-vertical-ergonomico-lift',
        description:
          'Deixe sua mão elevada para o máximo conforto. Faça um realinhamento para uma postura mais natural. O Mouse Ergonômico Lift Vertical Logitech irá te ajudar com a postura ideal - perfeito para mãos pequenas, médias e com uma opção para canhotos também disponível.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720259215/fsw-store/image_19_c3gv9g.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720259216/fsw-store/image_20_p5exbm.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720259216/fsw-store/image_21_cqchmx.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720259216/fsw-store/image_22_kzohkb.png',
        ],
        basePrice: 330,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({
      data: mouses,
    })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342251/fsw-store/image_46_iciocy.png',
      },
    })

    const keyboards = [
      {
        name: 'Teclado Gamer SuperFrame Ribbon',
        slug: 'teclado-gamer-superframe-ribbon',
        description:
          'O Teclado Gamer SuperFrame Ribbon é uma escolha excelente para gamers que buscam performance, durabilidade e personalização em um só produto. Com seu design compacto de 75%, ele oferece mais espaço na mesa para movimentar o mouse, sem comprometer o acesso às teclas essenciais.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342251/fsw-store/image_43_m3nmkv.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342251/fsw-store/image_46_iciocy.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342252/fsw-store/image_45_yznohe.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342252/fsw-store/image_44_wyy7u4.png',
        ],
        basePrice: 349,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Teclado Gamer Mecânico SuperFrame Fusion Pro',
        slug: 'teclado-gamer-mecanico-superframe-fusion-pro',
        description:
          'O Teclado Gamer Mecânico SuperFrame Fusion Pro é a escolha perfeita para gamers e entusiastas de tecnologia. Com conectividade versátil, ele oferece modos wireless, Bluetooth e USB, adaptando-se a diferentes dispositivos.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342523/fsw-store/image_31_xk5da2.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342523/fsw-store/image_32_ertw68.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342524/fsw-store/image_33_z88jlb.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342528/fsw-store/image_34_i3xmqw.png',
        ],
        basePrice: 499,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Teclado Gamer Mecânico Akko MOD 007PC Akko 7th Anniversary',
        slug: 'teclado-gamer-mecanico-akko',
        description:
          'O primeiro teclado da Akko com interruptores magnéticos e compatível com interruptores mecânicos de 3 pinos',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342926/fsw-store/image_35_qymfa3.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342926/fsw-store/image_36_pqunwd.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342927/fsw-store/image_37_t7x8yk.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720342931/fsw-store/image_38_jazwst.png',
        ],
        basePrice: 1129,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Teclado Mecânico Gamer Montech MKey TKL Freedom',
        slug: 'teclado-mecanico-gamer-montech-mkey-tkl-freedom',
        description:
          'A Montech finalmente lançou o primeiro teclado em sua linha MKey após dois anos de planejamento e design meticulosos. A linha MKey visa criar teclados que oferecem uma experiência de digitação premium, ao mesmo tempo em que fornecem uma história cativante para o próprio produto. Esses teclados não são apenas funcionalmente superiores, mas também trazem alegria ao usuário, tornando a digitação uma aventura maravilhosa.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720343323/fsw-store/image_39_law5mv.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720343323/fsw-store/image_40_u9ayju.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720343327/fsw-store/image_42_y90ezb.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720343323/fsw-store/image_41_jwzlsx.png',
        ],
        basePrice: 509,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'AKKO-Silencioso Dual-Mode Teclado Mecânico',
        slug: 'akko-silencioso-dual-mode-teclado-mecanico',
        description:
          'Marca: AKKO\nModelo: Silent Bluetooth dual-mode teclado mecânico\nMaterial: Plástico ABS\nCondição: Novo\nConexão método: USB Bluetooth\nNúmero de dispositivos conectados simultaneamente: 2\nSe existem teclas de função multimédia: Sim',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344220/fsw-store/image_26_uq6rlu.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344215/fsw-store/image_25_zrnbiq.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344214/fsw-store/image_24_zvwgb5.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344214/fsw-store/image_23_zqjxoq.png',
        ],
        basePrice: 200,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Teclado Mecânico Gamer Akko Neon 3098',
        slug: 'teclado-mecanico-gamer-akko-neon-3098',
        description:
          'Marca:Akko\nModelo:AKKO-3098-NEON\nCaracterísticas Temática neon exclusiva.\nKeycaps PBT Double Shot.\nCabo USB-C Removivel.\nSwitch: Akko Cream Blue\nAcionamento: Mecânico\nHotswap DIY: Não\nCor: Azul Marinho, Roxo e Magenta\nFormato: 96%',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344523/fsw-store/image_29_eec0im.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344524/fsw-store/image_30_xwvzvk.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344519/fsw-store/image_28_p58on0.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344518/fsw-store/image_27_vhexbz.png',
        ],
        basePrice: 250,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: keyboards,
    })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: 'Fones',
        slug: 'headphones',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345790/fsw-store/image_55_ihh3xw.png',
      },
    })

    const headphones = [
      {
        name: 'Headset Gamer Corsair Virtuoso RGB Wireless',
        slug: 'headset-gamer-corsair-virtuoso-rgb-wireless',
        description:
          'O Corsair VIRTUOSO RGB Wireless proporciona uma experiência de áudio de alta fidelidade e conforto o dia inteiro, por meio de seus auriculares premium em viscoelástico e conectividade ultrarrápida com a tecnologia SLIPSTREAM WIRELESS.Compatível com iCUE da Corsair.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344910/fsw-store/image_47_rakydc.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720344910/fsw-store/image_48_d7lzcp.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345013/fsw-store/image_50_rib90a.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345012/fsw-store/image_49_tgt9ig.png',
        ],
        basePrice: 950,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Headset Gamer Logitech Astro A10 GEN 2 XB',
        slug: 'headset-gamer-logitech-astro-a10-gen-2-xb',
        description:
          'Aprimore seu setup gamer com o headset ASTRO A10. Experiência de áudio explosivo graças aos drivers dinâmicos de 32mm, microfone flip-to-mute e construção durável com almofadas de ouvido substituíveis e almofada de cabeça que juntos garantem uma experiência de áudio inesquecível. Se prepare para jogar a noite toda com o A10 graças à sua construção ergonômica e robusta com uma alça de cabeça duradoura. Ajuste seu áudio sem sair do lugar com um controle multimídia integrado ao cabo.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345182/fsw-store/image_51_dkrg2q.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345183/fsw-store/image_52_k0pdsg.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345188/fsw-store/image_54_ndg9g9.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345187/fsw-store/image_53_w7dbmz.png',
        ],
        basePrice: 489,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Headset Gamer Logitech G332',
        slug: 'headset-gamer-logitech-g332',
        description:
          'O headset para jogos Logitech G332 produz um som amplo para você entrar no jogo. Experimente a emoção de uma experiência de jogo completa, onde você ouve tudo e todos ouvem você.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345790/fsw-store/image_55_ihh3xw.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345789/fsw-store/image_56_hclw6n.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345796/fsw-store/image_58_zn7qjm.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720345794/fsw-store/image_57_k5dt4d.png',
        ],
        basePrice: 299,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Headset Gamer Razer Kraken Kitty Edition Preto Chroma',
        slug: 'headset-gamer-razer-kraken-kitty-edition-preto-chroma',
        description:
          'Orelhas de gatinho e fones de ouvido com tecnologia Razer Chroma\nIluminação reativa ao fluxo\nMicrofone ativo com cancelamento de ruído\nTHX Áudio Espacial\nAlmofadas para gel de resfriamento',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720346394/fsw-store/image_59_pwvwva.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720346395/fsw-store/image_60_o5pdpd.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720346400/fsw-store/image_61_wkqiut.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720346621/fsw-store/image_62_h4nd32.png',
        ],
        basePrice: 1179,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Headset Gamer Corsair Virtuoso Rgb Wireless Preto',
        slug: 'headset-gamer-corsair-virtuoso-rgb-wireless-preto',
        description:
          'De um leve passo a um retumbante som grave, você vai ouvir tudo melhor com o VIRTUOSO RGB Wireless. Um par combinado de drivers de alto-falante em neodímio de 50mm ajustados com precisão apresentam um intervalo de frequência de 20Hz–40.000Hz — o dobro da maioria dos headsets gamer.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347069/fsw-store/image_63_uei8kq.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347070/fsw-store/image_64_tbxuu1.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347074/fsw-store/image_65_zoungy.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347076/fsw-store/image_66_cfcqcu.png',
        ],
        basePrice: 899,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Fone De Ouvido JBL Tune 720BT',
        slug: 'fone-de-ouvido-jbl-tune-720bt',
        description:
          'Experimente a liberdade e a qualidade sonora com o Fone de Ouvido JBL Tune 720BT. Projetado para oferecer um som impressionante e uma experiência de uso confortável, este fone de ouvido é perfeito para o seu dia a dia.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347384/fsw-store/image_67_dnpigg.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347386/fsw-store/image_68_i3gx1t.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347478/fsw-store/image_69_ayhyir.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720347481/fsw-store/image_70_jedvhn.png',
        ],
        basePrice: 299,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: headphones,
    })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408210/fsw-store/image_71_ujqwps.png',
      },
    })

    const mousepads = [
      {
        name: 'Mousepad Logitech Powerplay Carregamento Wireless',
        slug: 'mousepad-logitech-powerplay-carregamento-wireless',
        description:
          'Maximize sua experiência de jogo e produtividade com o Mousepad Logitech Powerplay Carregamento Wireless. Este mousepad inovador oferece não apenas uma superfície de alta qualidade para seus movimentos precisos, mas também a conveniência do carregamento sem fio contínuo.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408210/fsw-store/image_71_ujqwps.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408211/fsw-store/image_72_o4liqo.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408212/fsw-store/image_73_pabtso.png',
        ],
        basePrice: 850,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Mousepad Gamer Corsair MM350 Pro',
        slug: 'mousepad-gamer-corsair-mm350-pro',
        description:
          'Eleve sua experiência de jogo com o Mousepad Gamer Corsair MM350 Pro. Projetado para oferecer precisão e conforto, este mousepad é ideal para gamers que buscam performance e durabilidade.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408555/fsw-store/image_74_f6go5o.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408556/fsw-store/image_75_z60pd7.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408560/fsw-store/image_76_tpjcu1.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408563/fsw-store/image_77_hwj3yt.png',
        ],
        basePrice: 389,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Mousepad Pcyes Obsidian G3D',
        slug: 'mousepad-pcyes-obsidian-g3d',
        description:
          'Aprimore sua experiência no computador com o Mousepad Pcyes Obsidian G3D. Projetado para oferecer precisão, durabilidade e conforto, este mousepad é perfeito tanto para gamers quanto para profissionais.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408923/fsw-store/image_78_gknnvu.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408923/fsw-store/image_79_yrfsiw.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408927/fsw-store/image_80_ifqzxk.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720408930/fsw-store/image_81_nklwar.png',
        ],
        basePrice: 159,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Mousepad Gamer Force One Skyhawk 3XL Fluxo Edition',
        slug: 'mousepad-gamer-force-one-skyhawk-3xl-fluxo-edition',
        description:
          'Aprimore sua experiência de jogo com o Mousepad Gamer Force One Skyhawk 3XL Fluxo Edition. Este mousepad de edição especial oferece uma superfície ampla e de alta qualidade, perfeita para gamers que buscam precisão e conforto em cada movimento.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409060/fsw-store/image_82_b5ena6.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409062/fsw-store/image_83_r99dtw.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409066/fsw-store/image_84_ky1wik.png',
        ],
        basePrice: 135,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Mousepad Cougar Arena X 1000x400x5mm',
        slug: 'mousepad-cougar-arena-x-1000x400x5mm',
        description:
          'Aumente seu desempenho e conforto com o Mousepad Cougar Arena X 1000x400x5mm. Este mousepad oferece uma ampla área de superfície, ideal para gamers e profissionais que buscam precisão e estabilidade.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409350/fsw-store/image_85_uetu1g.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409353/fsw-store/image_86_ed8gwn.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409356/fsw-store/image_87_itafro.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409359/fsw-store/image_88_ikx9co.png',
        ],
        basePrice: 129,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Mousepad Dazz FPS Heavy',
        slug: 'mousepad-dazz-fps-heavy',
        description:
          'Melhore seu desempenho em jogos com o Mousepad Dazz FPS Heavy. Projetado especialmente para gamers, este mousepad oferece uma superfície de alta precisão e durabilidade, ideal para sessões de jogo intensas.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409586/fsw-store/image_90_uhkwo1.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409590/fsw-store/image_91_smaxhe.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409593/fsw-store/image_92_ngqdnu.png',
        ],
        basePrice: 109,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: mousepads,
    })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: 'Monitores',
        slug: 'monitors',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410820/fsw-store/image_105_srthok.png',
      },
    })

    const monitors = [
      {
        name: 'Monitor Gamer Samsung Odyssey G9, 49 Pol',
        slug: 'monitor-gamer-samsung-odyssey-g9-49-pol',
        description:
          'Mergulhe em uma experiência de jogo imersiva com o Monitor Gamer Samsung Odyssey G9, 49 Pol. Este monitor ultrawide oferece uma qualidade de imagem excepcional e um design curvo impressionante, ideal para gamers exigentes.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409855/fsw-store/image_93_mnuyna.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409859/fsw-store/image_94_viokqf.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409861/fsw-store/image_95_ayse6w.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720409865/fsw-store/image_96_ryvmta.png',
        ],
        basePrice: 14000,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Monitor Gamer Samsung Odyssey G5, 34 Pol',
        slug: 'monitor-gamer-samsung-odyssey-g5-34-pol',
        description:
          'Desfrute de uma experiência imersiva de jogo com o Monitor Gamer Samsung Odyssey G5, 34 Pol. Com um design elegante e características projetadas para jogadores exigentes, este monitor é uma excelente escolha para quem busca desempenho e qualidade visual.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410117/fsw-store/image_97_s4u7pp.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410120/fsw-store/image_98_evi5tb.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410123/fsw-store/image_99_nystup.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410127/fsw-store/image_100_sxlitr.png',
        ],
        basePrice: 3800,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Monitor Gamer Galax HOF Lite Stellar I, 27 Pol',
        slug: 'monitor-gamer-galax-hof-lite-stellar-i-27-pol',
        description:
          'Entre no mundo dos jogos com o Monitor Gamer Galax HOF Lite Stellar I, 27 Pol. Este monitor combina desempenho de alta qualidade e um design elegante para proporcionar uma experiência de jogo imersiva e fluida.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410483/fsw-store/image_101_qf039h.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410486/fsw-store/image_102_eabq5e.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410490/fsw-store/image_103_ktqd5r.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410493/fsw-store/image_104_mvioum.png',
        ],
        basePrice: 1600,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Monitor Gamer AOC Agon Pro Porsche Design, 31.5 Pol',
        slug: 'monitor-gamer-aoc-agon-pro-porsche-design-31-5-pol',
        description:
          'Explore o máximo desempenho com o Monitor Gamer AOC Agon Pro Porsche Design, 31.5 Pol. Projetado em colaboração com a Porsche Design, este monitor combina estilo elegante com tecnologia avançada para proporcionar uma experiência de jogo premium.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410820/fsw-store/image_105_srthok.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410859/fsw-store/image_106_tsoxm7.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410862/fsw-store/image_107_j7w9ku.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720410864/fsw-store/image_108_gduhkm.png',
        ],
        basePrice: 11000,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Monitor Gamer Philips Evnia, 42 Pol, OLED, 4K',
        slug: 'monitor-gamer-philips-evnia-42-pol-oled-4k',
        description:
          'Experimente o futuro dos jogos com o Monitor Gamer Philips Evnia, 42 Pol, OLED, 4K. Este monitor revolucionário combina tecnologia OLED com resolução 4K para oferecer imagens vibrantes e detalhadas, ideal para gamers exigentes.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411099/fsw-store/image_109_gaqfij.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411101/fsw-store/image_110_awwlsz.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411105/fsw-store/image_111_epiji3.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411108/fsw-store/image_112_mp2p9c.png',
        ],
        basePrice: 12850,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Monitor Gamer AOC Agon AG275QXR, 27 Pol',
        slug: 'monitor-gamer-aoc-agon-ag275qxr-27-pol',
        description:
          'Entre no mundo dos jogos com o Monitor Gamer AOC Agon AG275QXR, 27 Pol. Projetado para oferecer desempenho excepcional e qualidade visual impressionante, este monitor é ideal para gamers que buscam precisão e imersão.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411291/fsw-store/image_113_bpglz9.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411293/fsw-store/image_114_awcndm.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411327/fsw-store/image_115_jixpyu.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720411328/fsw-store/image_116_ghz5x5.png',
        ],
        basePrice: 2299,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: monitors,
    })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl:
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412462/fsw-store/image_120_wfgq9n.png',
      },
    })

    const speakers = [
      {
        name: 'Monitor de Referência Edifier R1700BT 2.0 66W RMS Bluetooth Preta',
        slug: 'monitor-de-referencia-edifier-r1700bt-2-0-66w-rms-bluetooth-preta',
        description:
          'Desfrute de áudio de alta qualidade com o Monitor de Referência Edifier R1700BT 2.0. Este sistema de som estéreo oferece uma combinação de desempenho poderoso e conectividade Bluetooth, ideal para diversas aplicações de áudio.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412305/fsw-store/image_117_aov9bu.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412459/fsw-store/image_119_bf2skn.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412462/fsw-store/image_120_wfgq9n.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Caixa de Som JBL Pulse 5, 30W RMS, RGB, Bluetooth, Preta, JBLPULSE5BLK',
        slug: 'caixa-de-som-jbl-pulse-5-30w-rms-rgb-bluetooth-preta-jblpulse5blk',
        description:
          'A Caixa de Som JBL Pulse 5 combina áudio de alta qualidade com um show de luzes RGB, oferecendo uma experiência sonora e visual imersiva em qualquer lugar.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412473/fsw-store/image_121_h456qx.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412476/fsw-store/image_122_xr5xfs.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412479/fsw-store/image_124_gidu3c.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720412483/fsw-store/image_125_h8ope3.png',
        ],
        basePrice: 1300,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Monitor de Referência Edifier R1280DB, 42W RMS, Bluetooth, Branco, R1280DB-WH',
        slug: 'sony-sa-z9r-speakermonitor-de-referencia-edifier-r1280db-42w-rms-bluetooth-branco-r1280db-wh',
        description:
          'O Monitor de Referência Edifier R1280DB oferece uma combinação perfeita de qualidade de áudio, conectividade Bluetooth e design elegante, ideal para diversos ambientes e usos.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413066/fsw-store/image_127_hhlqyr.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413018/fsw-store/image_126_pw3fkj.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413069/fsw-store/image_128_eqyn1f.png',
        ],
        basePrice: 999,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Monitor de Referência Edifier R1080BT 2.0 24W RMS Bluetooth Preto',
        slug: 'monitor-de-referencia-edifier-r1080bt-2-0-24w-rms-bluetooth-preto',
        description:
          'O Monitor de Referência Edifier R1080BT oferece qualidade de áudio superior em um formato compacto e elegante, ideal para diversas aplicações de áudio em casa ou no escritório.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413244/fsw-store/image_129_trlv01.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413248/fsw-store/image_130_gpy2lm.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413251/fsw-store/image_131_ce471c.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413255/fsw-store/image_132_yqigjr.png',
        ],
        basePrice: 799,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Caixa de Som JBL Flip 6, Bluetooth, Azul, JBLFLIP6BLU',
        slug: 'caixa-de-som-jbl-flip-6-bluetooth-azul-jblflip6blu',
        description:
          'A Caixa de Som JBL Flip 6 combina potência de áudio com portabilidade e resistência, ideal para uso em ambientes internos e externos.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413596/fsw-store/image_133_ksv4nv.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413598/fsw-store/image_134_curl3v.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413603/fsw-store/image_135_hyx3gc.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413606/fsw-store/image_136_ytmxxa.png',
        ],
        basePrice: 699,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Caixa de Som Harman Kardon Luna, Bluetooth, IP67, 40W RMS, Preto, HKLUNABLK',
        slug: 'sony-ht-s200f-soundbacaixa-de-som-harman-kardon-luna-bluetooth-ip67-40w-rms-preto-hklunablk',
        description:
          'A Caixa de Som Harman Kardon Luna combina design elegante com desempenho de áudio de alta qualidade, oferecendo uma experiência sonora premium em qualquer ambiente.',
        imageUrls: [
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413888/fsw-store/image_137_foj7du.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413892/fsw-store/image_138_dpkmnv.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413896/fsw-store/image_139_zi3xzo.png',
          'https://res.cloudinary.com/dgsekjhmu/image/upload/v1720413899/fsw-store/image_140_ynmk8l.png',
        ],
        basePrice: 699,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
