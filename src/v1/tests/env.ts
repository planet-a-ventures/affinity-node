export const apiKey = () => Deno.env.get('API_KEY')
export const isLiveRun = () => typeof apiKey() !== 'undefined'
