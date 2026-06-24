const staticMapping = {
  'adobe xd': 'adobe-xd.svg',
  'after effects': 'after-effects.svg',
  'next js': 'nextJS.svg',
  'nuxt js': 'nuxtJS.svg',
  'mongodb': 'mongoDB.svg',
  'c++': 'cplusplus.svg',
  'c#': 'csharp.svg',
  'adobe audition': 'adobeaudition.svg',
  'premiere pro': 'premierepro.svg',
  'microsoft office': 'microsoftoffice.svg',
};

const VALID_SKILLS = new Set([
  'gcp', 'html', 'photoshop', 'docker', 'illustrator', 'adobe xd', 'after effects',
  'css', 'angular', 'javascript', 'next js', 'nuxt js', 'react', 'svelte',
  'typescript', 'vue', 'bootstrap', 'bulma', 'capacitorjs', 'coffeescript',
  'memsql', 'mongodb', 'mysql', 'postgresql', 'tailwind', 'vitejs', 'vuetifyjs',
  'c', 'c++', 'c#', 'dart', 'go', 'java', 'kotlin', 'julia', 'matlab', 'php',
  'python', 'ruby', 'swift', 'adobe audition', 'aws', 'deno', 'django',
  'firebase', 'gimp', 'git', 'graphql', 'lightroom', 'materialui', 'nginx',
  'numpy', 'opencv', 'premiere pro', 'pytorch', 'selenium', 'strapi', 'tensorflow',
  'webix', 'wordpress', 'azure', 'blender', 'fastify', 'figma', 'flutter',
  'haxe', 'ionic', 'markdown', 'microsoft office', 'picsart', 'sketch', 'unity',
  'wolframalpha', 'canva'
]);

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().trim();
  
  if (!VALID_SKILLS.has(skillID)) {
    return null;
  }

  const filename = staticMapping[skillID] || `${skillID}.svg`;
  
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/portfolio' : '';

  return {
    src: `${prefix}/svg/skills/${filename}`
  };
};
