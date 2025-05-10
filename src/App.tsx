import { useRef } from 'react';
import './App.css';
import { ParamEditor } from './components/ParamEditor';
import type { Param, Model } from './components/ParamEditor';

function App() {
  const editorRef = useRef<ParamEditor>(null);

  const params: Param[] = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' },
    ],
    colors: [],
  };

  const handleSave = () => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      console.log('Модель:', model);
      alert(JSON.stringify(model, null, 2));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Редактор параметров</h1>
      <ParamEditor ref={editorRef} params={params} model={model} />
      <button onClick={handleSave} style={{ marginTop: '20px' }}>
        Сохранить
      </button>
    </div>
  );
}

export default App;
