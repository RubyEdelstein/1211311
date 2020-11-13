
const farms_data = {
    'ampl-eth': {
        img: '/images/farms/ampl.svg',
        title: 'AMPL / ETH',
        token: 'AMPL-ETH LP',
        url: '/farm/ampl-eth',
        tokenAddress: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
        lpTokenAddress: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
        id: 0
    },
    'comp-eth': {
        img: '/images/farms/comp.svg',
        title: 'COMP / ETH',
        token: 'COMP-ETH LP',
        url: '/farm/comp-eth',
        tokenAddress: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
        lpTokenAddress: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
        id: 1
    },
    'dai-eth': {
        img: '/images/farms/dai.svg',
        title: 'DAI / ETH',
        token: 'DAI-ETH LP',
        url: '/farm/dai-eth',
        tokenAddress: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
        lpTokenAddress: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
        id: 2
    },
    'link-eth': {
        img: '/images/farms/link.svg',
        title: 'LINK / ETH',
        token: 'LINK-ETH LP',
        url: '/farm/link-eth',
        tokenAddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
        lpTokenAddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
        id: 3
    },
    'srm-eth': {
        img: '/images/farms/srm.svg',
        title: 'SRM / ETH',
        token: 'SRM-ETH LP',
        url: '/farm/srm-eth',
        tokenAddress: '0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54',
        lpTokenAddress: '0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54',
        id: 4
    },
    // 'usdt-eth': {
    //     img: '/images/farms/usdt.svg',
    //     title: 'USDT / ETH',
    //     token: 'USDT-ETH LP',
    //     url: '/farm/usdt-eth',
    //     tokenAddress: '0x4794Eacd37cf3a3393e5710aFb7E5f102e1904B1',
    //     lpTokenAddress: '0x4794Eacd37cf3a3393e5710aFb7E5f102e1904B1',
    //     id: 5
    // }
}

export const farmIds = () => {
    const keys = Object.keys(farms_data)
    let result = []
    keys.forEach(n => {
        const { id } = farms_data[n]
        if(id >= 0) result.push(id)
    })
    return result
}

export default farms_data
