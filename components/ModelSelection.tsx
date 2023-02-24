'use client'
import useSWR from "swr"
import Select from "react-select"

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

const ModelSelection = () => {
  const {data: models, isLoading} = useSWR('models', fetchModels)   
  const {data : model, mutate: setModel} = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  return (
    <div className="mt-2">
        <Select 
            className="mt-2 hidden md:inline"
            options={models?.modelOptions}
            isSearchable={true}
            isLoading={isLoading}
            menuPosition='fixed'
            placeholder={model}
            defaultValue={model}
            onChange={(e) => setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection