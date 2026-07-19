# Plan: Filtro de Tags en Projects

## Objetivo
Implementar filtrado multi-select AND de proyectos por tags, con sincronización de URL.

## Requisitos
- **Multi-select AND**: HTML + CSS = solo proyectos con AMBOS tags
- **URL sync**: `?tag=html,css` actualizable con `history.pushState`
- **"Todo"**: limpia todas las selecciones
- **Vanilla JS**: sin React/Preact, solo Astro + JS nativo
- **Estado**: los tags seleccionados persisten en la URL

## Arquitectura

### Componentes
```
Projects.astro (contenedor)
├── Filter bar (botones de tags)
└── ProjectsItem.astro (cards individuales con data-tags)
```

### Data flow
```
1. Astro genera HTML estático con todos los proyectos
2. JS lee URLSearchParams al cargar
3. JS marca tags activos + oculta cards no coincidentes
4. Click en tag → toggle en Set → pushState → re-render
```

## Implementación

### 1. HTML structure (Projects.astro)
```astro
<div class="filter-bar">
  <button data-tag="all" class="filter-btn active">Todo</button>
  {allTags.map(tag => (
    <button data-tag={tag} class="filter-btn">{tag}</button>
  ))}
</div>
<div class="projects-grid">
  {PROJECTS.map(project => <ProjectsItem {...project} />)}
</div>
```

### 2. ProjectsItem.astro
```astro
<article data-tags={tags.join(',')}>
  <!-- contenido -->
</article>
```

### 3. JS vanilla (en Projects.astro)
```js
const params = new URLSearchParams(window.location.search);
const activeTags = new Set(params.get('tag')?.split(',').filter(Boolean) || []);

function updateUI() {
  // 1. Actualizar botones activos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const tag = btn.dataset.tag;
    if (tag === 'all') {
      btn.classList.toggle('active', activeTags.size === 0);
    } else {
      btn.classList.toggle('active', activeTags.has(tag));
    }
  });

  // 2. Filtrar cards
  document.querySelectorAll('[data-tags]').forEach(card => {
    const cardTags = card.dataset.tags.split(',');
    if (activeTags.size === 0) {
      card.style.display = '';
    } else {
      const hasAll = [...activeTags].every(t => cardTags.includes(t));
      card.style.display = hasAll ? '' : 'none';
    }
  });

  // 3. Actualizar URL
  const newTag = activeTags.size > 0 ? `?tag=${[...activeTags].join(',')}` : '';
  history.pushState({}, '', newTag || window.location.pathname);
}

// Event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;
    if (tag === 'all') {
      activeTags.clear();
    } else {
      activeTags.has(tag) ? activeTags.delete(tag) : activeTags.add(tag);
    }
    updateUI();
  });
});

// Inicializar
updateUI();
```

### 4. CSS (index.css)
```css
.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.filter-btn {
  /* estilos base */
}

.filter-btn.active {
  /* estilos activos */
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
}
```

## Checklist
- [ ] Crear `ProjectsItem.astro` con `data-tags` attribute
- [ ] Modificar `Projects.astro` para importar y usar `ProjectsItem`
- [ ] Extraer `allTags` con `Set` en frontmatter
- [ ] Agregar filter bar con botones
- [ ] Agregar `<script>` con lógica de filtrado
- [ ] Agregar CSS para `.filter-bar` y `.filter-btn`
- [ ] Probar: URL sync, multi-select, "Todo" reset
- [ ] Probar: AND logic (HTML + CSS = ambos)
- [ ] Probar: persistencia en refresh

## Notas
- `data-tags` en ProjectsItem permite selección con `querySelectorAll`
- `Set` para tags activos mantiene unicidad y facilita toggle
- `history.pushState` actualiza URL sin recargar
- `display: none` oculta cards sin eliminarlas del DOM

