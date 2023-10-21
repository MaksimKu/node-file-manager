import { cpus } from 'node:os';

const showCpus = () => {
    const cpu = cpus();
    let cpusInfo = [];
    cpu.forEach(i => cpusInfo.push({ model: i.model.trim(), rate: `${i.speed / 1000} GHz` }));
    console.log(`${cpusInfo.length} cpus:`, cpusInfo);
}

export default showCpus;