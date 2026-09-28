# 🧩 Редактор параметров (тестовое задание)


[![Просмотры README](https://vbr.nathanchung.dev/badge?page_id=Richbanker.param-editor&text=README_Views)](https://github.com/Richbanker/param-editor)

Реализация компонента `ParamEditor` на **React + TypeScript** по техническому заданию. Компонент позволяет редактировать структуру `Model`, отображая список параметров (`Param[]`) и значения из `model.paramValues`.

---

## 📌 Стек

- ⚛️ React (class component)
- 🟦 TypeScript
- ⚡ Vite
- 🧪 Тестовый метод `getModel()` для сбора текущих данных
- 🎯 Строгий типовой контроль (`strict` mode)

---

## 📸 Интерфейс

- Поля "Назначение" и "Длина"
- Кнопка "Сохранить"
- Вывод актуальной модели по кнопке (через `alert()`)

---

## ✅ Реализовано

- [x] Интерфейсы `Param`, `Model`, `ParamValue`
- [x] Класс-компонент `ParamEditor`
- [x] Метод `getModel()` возвращает актуальное состояние модели
- [x] Значения подтягиваются из `model.paramValues`
- [x] Ввод новых значений и отслеживание изменений
- [x] Весь код — в одном файле, как требуется
- [x] Использованы только текстовые поля (`type: 'string'`)

---

